import { IError } from '@app/model/error.model';
import { IProduct } from '@app/model/product.model';
import { ILoginContext, IUser } from '@app/model/user.model';
import { environment } from '@env/environment';

import PouchDB from 'pouchdb';
import PouchFind from 'pouchdb-find';
PouchDB.plugin(PouchFind);

export class DatabaseService {
    private db: PouchDB.Database;
    private dbName: string = environment.DB_NAME;

    constructor() {
    }

    createDatabase() {
        this.db = new PouchDB(this.dbName,
            {
                auto_compaction: true
            }
        )
        this.createTestUsers();
        this.createIndexes();
    }

    createIndexes() {
        this.db.createIndex({
            index: {
                fields: ['email', 'password']
            }
        })
    }

    /**
     * insert the document into pouch db 
     * @param {*} data must include a unique _id
     * 
     * @returns Promise 
     */
    async createDocument(data: any): Promise<any> {
        try {
            const docResult = await this.db.put(data);
            if (docResult.ok) {
                return await this.getDocumentById(docResult.id);
            } else {
                throw docResult;
            }
        } catch (err) {
            throw this.handleException(err);
        }
    }

    /**
     * insert the document into pouch db 
     * @param {*} data must include a unique _id
     * 
     * @returns Promise 
     */
    async updateDocument(id: string, data: any): Promise<any> {
        try {
            const doc = await this.getDocumentById(id);
            data = Object.assign(doc, data);
            const docResult = await this.db.put(data);
            if (docResult.ok) {
                return await this.getDocumentById(docResult.id);
            } else {
                throw docResult;
            }
        } catch (err) {
            throw this.handleException(err);
        }
    }

    /**
     * Get a particular document from the db by id
     * @param id unique id of the document
     * 
     * @returns Promise
     */
    async getDocumentById(id: string): Promise<any> {
        try {
            return await this.db.get(id);
        } catch (err) {
            throw this.handleException(err);
        }
    }

    async deleteDocument(id: string): Promise<any> {
        try {
            const doc = await this.getDocumentById(id);
            if (doc._id) {
                return await this.db.remove(doc);
            } else {
                throw new Error("Document not found");
            }
        } catch (err) {
            throw this.handleException(err);
        }
    }

    /**
     * get all products saved in database
     * 
     * @returns [IProduct] Array
     */
    async getAllProducts(): Promise<IProduct[] | IError> {
        try {
            const results: any = await this.db.allDocs({
                include_docs: true,
                startkey: `${environment.PRODUCT_COL_PREFIX}`,
                endkey: `${environment.PRODUCT_COL_PREFIX}\uffff`
            });

            const products: IProduct[] = results.rows.map((row: any): IProduct => {
                return ({
                    _id: row.doc._id,
                    productName: row.doc.productName,
                    description: row.doc.description,
                    price: row.doc.price,
                    productType: row.doc.productType,
                    quantity: row.doc.quantity,
                    vendor: row.doc.vendor,
                    createdDate: row.doc.createdDate,
                    updatedDate: row.doc.updatedDate
                });
            });
            return products;
        } catch (err) {
            throw this.handleException(err);
        }
    }

    async deleteMultipleProducts(ids: string[]) {
        try {
            return Promise.all(ids.map((id) => {
                return this.deleteDocument(id)
            }));
        } catch (err) {
            throw this.handleException(err);
        }
    }

    /**
     * check user exist in db 
     * @param credentials 
     */
    async checkUserCredentials(credentials: ILoginContext): Promise<any | IError> {
        try {
            console.log(credentials);
            const result = await this.db.find({
                selector: credentials,
                fields: ['_id', 'email', 'name']
            });
            console.log(result);
            if (result.docs.length) {
                const user = result.docs[0];
                return user;
            } else {
                const error: IError = {
                    status: 404,
                    message: "Provided credentials not found"
                }
                throw error;
            }
        } catch (err) {
            throw this.handleException(err);
        }
    }

    /**
     * create a test user on the time of database creation
     */
    async createTestUsers(): Promise<void> {
        const _id = `${environment.USER_COL_PREFIX}1`;
        try {
            const response = await this.getDocumentById(_id);
        } catch (err) {
            if (err.status === 404 || err.status === 500) {
                const userDetails: IUser = {
                    _id: _id,
                    email: 'test@test.com',
                    name: 'Test User',
                    password: '123456'
                }
                await this.createDocument(userDetails);
            }
        }
    }

    private handleException(err): IError {
        const error: IError = {
            status: 500,
            message: err && err.message ? err.message : err ? err.toString() : 'Something bad happened'
        };
        return error;
    }
}