import React from 'react';

const getTime = async()=>{
    const res = await fetch('http://localhost:3000/time',{cache:'no-store'});
    const data = await res.json();
    return data.currentTime;
}

const About =async () => {
    const time = await getTime();
    return (
        <div>
            <h2>This is About</h2>
            <p>Time: {time}</p>
        </div>
    );
};

export default About;