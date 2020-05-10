import firebase from './firebase';

const findOpponent = (userID) => {
  const QueuesRef = firebase.database().ref('Queues');
  QueuesRef.once('value', (snapshot) => {
    const queues = snapshot.val();
    if (!queues) {
      QueuesRef.child(userID).set({
        isFull: false,
        host: userID,
        client: '',
      });
    } else {
      for (let queueId in queues) {
        if (!queues[queueId].isFull) {
          QueuesRef.child(queueId).update({
            isFull: true,
            client: userID,
          });
        } else {
          QueuesRef.child(userID).set({
            isFull: false,
            host: userID,
            client: '',
          });
        }
      }
    }
  });
};

const listenQueue = (userID, history) => {
  const QueueRef = firebase.database().ref(`Queues`);
  QueueRef.on('value', (snapshot) => {
    const queues = snapshot.val();
    for (let id in queues) {
      if (queues[id].isFull && [queues[id].host, queues[id].client].includes(userID)) {
        console.log(`MATCH FOUND:\nHOST:${queues[id].host}, CLIENT:${queues[id].client}`);

        // create board
        const MatchRef = firebase.database().ref('Matches');
        const myBoard = MatchRef.child(userID);
        const opponent = userID === queues[id].host ? userID : queues[id].client;

        myBoard.set({
          board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          playerTurn: queues[id].host,
          opponent,
        });
        QueueRef.child(id).remove();
        // push to game route
        history.push('/tictactoe/play');
      }
    }
  });
};

const cancelFind = (userID) => {
  firebase.database().ref(`Queues/${userID}`).remove();
};
export { findOpponent, listenQueue, cancelFind };
