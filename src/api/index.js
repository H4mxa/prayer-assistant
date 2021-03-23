import db from 'db';

export const fetchServiceById = (serviceId) => {
  return db
    .collection('services')
    .doc(serviceId)
    .get()
    .then((snapshot) => ({ id: snapshot.id, ...snapshot.data() }));
};

export const fetchServices = () => {
  // fetching data from firebase
  return (
    db
      .collection('services')
      // this will get my data
      .get()
      .then((snapshot) => {
        // now uh can get this data from snapshot like this
        const services = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        return services;
      })
  );
};
