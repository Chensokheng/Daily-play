import firebase from './firebase';

const findOpponent = (userID, history) => {
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
          // update database
          QueuesRef.child(queueId).update({
            isFull: true,
            client: userID,
          });

          //   console.log(`Host: ${queues[queueId].host}`);
          //   console.log(`Client: ${userID}`);
          //   history.push('/hello');
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

// const listenQueue = () => {
//   user1;
// };

export { findOpponent };
