const services = [
  {
    id: '2asd8sa7d98',
    user: 'some_id_1',
    category: 'mathematics',
    title: 'I will teach you math fast!',
    description:
      'I am teaching highschool mathematics, algebra, triogometry. I can teach you anything!',
    price: 10, //per hour
    image:
      'https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 'ssa9d789as7',
    user: 'some_id_2',
    category: 'programming',
    title: 'I will teach you Programming fast!',
    description: 'I am teaching C++, C#, JS ...',
    price: 10, //per hour
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
];

export const fetchServices = () => {
  return {
    /* Action return object, and in this object we need to specify type
      This will be type of your action, maybe a string saying type of this actions is fetch_services
    */
    type: 'FETCH_SERVICES',
    // optionally you can send here some data.
    services, // Since the key and value name is same we can write one time services
    /*
    now we need to dispatch this actions
    The general concept is to dispatch action when you want to perform so much changes in your store
    */
  };
};
