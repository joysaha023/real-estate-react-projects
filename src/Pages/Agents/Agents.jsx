import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from "react-router-dom";
import AgentsCard from './AgentsCard';

const Agents = () => {
    const agents = useLoaderData();
    // console.log(agents)
    return (
        <div>
            <Helmet>
                <title>HavenHQ - Agents</title>
            </Helmet>
            <h2>This is agents</h2>
            <div>
                {
                    agents.map(item => <AgentsCard key={item} item={item}></AgentsCard>)
                }
            </div>
        </div>
    );
};

export default Agents;