import React, { useEffect, useState } from 'react';
import LoginContext from '../Context/LoginContext';
import { getHistory } from '../util/api';
import { Container } from 'react-bootstrap';

const UserProfile = () => {
    const { userDetail } = React.useContext(LoginContext);
    const [pastPredictions, setPastPredictions] = useState([]);
    const fetchData = async () => {
        try {
            const response = await getHistory(userDetail._id);
            // console.log(response.pastResults); // Log the entire response
            // console.log(response.data.data.user.pastResults);
            setPastPredictions(response.pastResults); // Update this line
        } catch (error) {
            console.error('Error fetching history:', error.message);
        }
    };

    useEffect(() => {

        fetchData();
    }, [userDetail]);


    return (
        <>
            <Container className='py-4 d-flex flex-column align-items-center profile'>
                <h1 className='text-light'>Past Submissions</h1>
                <div>
                    {pastPredictions.length > 0 ? <table className='table my-2'>
                        <tr>
                            <th>Class</th>
                            <th>Confidence</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                        {pastPredictions.map((item, index) => (<tr key={index} className="my-2">

                            <td>{item.class_name}</td>
                            <td>{(item.confidence * 100).toFixed(3)}%</td>
                            <td>{new Date(item.date).toDateString()}</td>
                            <td>{new Date(item.date).toTimeString().split(" ")[0]}</td>
                        </tr>))}
                    </table> : <h3 className='text-center text-danger'>No previous history present</h3>}

                </div>
                {/* <ul> {pastPredictions.length > 0 ? pastPredictions.map((item) => (<li >{item.class_name}</li>)) : 'No Previous Predictions Present'}</ul> */}
            </Container>


        </>
    );
};

export default UserProfile;
