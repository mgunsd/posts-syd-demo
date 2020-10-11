import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(

    () => {
      try {
        (async resource => {
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/${resource}`
          );
          setResources(response.data);
        })(resource);
      } catch (err) {
        console.log(err)
      }
    },
    [resource]
  );

  return resources;
};

export default useResources;