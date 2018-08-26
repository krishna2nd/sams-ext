import PouchDB from 'pouchdb';
import qs from 'querystrings';

const db = new PouchDB('sams.com.mx');
window.db = db;
class Cache {
  genUrlKey(options) {
    let query = qs.stringify({ ...options.params });
    if (query) query = '?' + query;
    return `${options.url}${query}`;
  }
  async create(doc, options) {
    db.post(doc, options);
  }
  insert(doc, options) {
    db.post(doc, options);
  }
  update(doc, options) {
    return db.put(doc, options);
  }
  async upsert(inDoc, options) {
    //console.log(JSON.stringify(inDoc))
    return db
      .get(inDoc._id)
      .then(function(doc) {
        doc.result = inDoc.result;
        console.log('inDoc', inDoc);
        return db.put(doc, { force: true });
      })
      .catch(function(err) {
        console.log(err);
        return db.post(inDoc, { force: true });
      });
  }
  delete(docId, options) {
    return db.remove(docId, options);
  }
  select(docId, options = {}) {
    return db.get(docId, options).catch(err => {
      console.error(err);
      return err;
    });
  }
}
const cache = new Cache();
export default cache;
