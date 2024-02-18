// useGetData.js
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '../screen/Firebase';

function useGetData(collectionName) {
  const db = getFirestore(app);
  const [data, setData] = useState([]);
  const collectionRef = collection(db, collectionName);

  useEffect(() => {
    const fetchData = async () => {
        try {
            // console.log('Fetching data from Firestore...');
            const querySnapshot = await getDocs(collectionRef);
            const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            // console.log('Fetched data:', newData);
            setData(newData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    };

    fetchData();
  }, [collectionRef]);

  return data;
}

export default useGetData;
