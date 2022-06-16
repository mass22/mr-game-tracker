import firebase from "../firebase";
const db = firebase.ref("/games");
class GameDataService {
  getAll() {
    return db;
  }
  create(game) {
    return db.push(game);
  }
  update(key, value) {
    return db.child(key).update(value);
  }
  delete(key) {
    return db.child(key).remove();
  }
  deleteAll() {
    return db.remove();
  }
}
export default new GameDataService();
