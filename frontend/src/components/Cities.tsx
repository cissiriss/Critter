import { Fragment, useEffect, useState } from "react";

interface City {
  id: string;
  name: string;
  population: number;
}

function Cities() {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    fetch("https://avancera.app/cities")
      .then((response) => response.json())
      .then((result: City[]) => setCities(result));
  }, []);

  return (
    <>
      {cities.length > 0 && (
        <dl>
          {cities.map((city: City, index) => (
            <Fragment key={index}>
              <dt>{city.name}</dt>
              <dd>{city.population}</dd>
            </Fragment>
          ))}
        </dl>
      )}
    </>
  );
}

export default Cities;
