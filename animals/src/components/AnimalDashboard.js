import React, { useState, useEffect } from 'react';

import AnimalForm from './AnimalForm.js';
import AnimalList from './AnimalsList.js';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function AnimalDashboard() {
    const [animals, setAnimals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    // const [update, setUpdate] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            axiosWithAuth()
                .get('animals')
                .then(res => {
                    setAnimals(res.data);
                    setIsLoading(false);
                    console.log(`Response log, ${res.data}`);
                })
                .catch(err => {
                    setIsLoading(false);
                    setError(error);
                    console.log(`Error fetching animals, ${err.response}`);
                });
        }, 2000);
    }, []);

    return (
        <div className='dash'>
            {isLoading && (
                <div style={{ color: `green`, fontSize: 34, marginLeft: 20 }}>
                    Loading...
                </div>
            )}
            {error && (
                <div style={{ color: `red`, fontSize: 34, marginLeft: 20 }}>
                    You done fucked up...
                </div>
            )}
            <AnimalForm animals={animals} updateAnimals={setAnimals} />
            <AnimalList animals={animals} />
        </div>
    );
}
