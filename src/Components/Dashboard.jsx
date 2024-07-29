import React, { useEffect, useState } from 'react';
import Gym from './Style/Images_Icons/Gym guy.png';

const Dashboard = (props) => {
    const [isTrue, setIsTrue] = useState(true);
    const [Drop, setDrop] = useState(false);
    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [Email, setEmail] = useState('');
    const [tableData, setTableData] = useState([]);
    const [PriceConfirm, setPriceConfirm] = useState();
    const [selectedValue, setSelectedValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const [prices] = useState({
        Monthly: 1500,
        Quarter: 4500,
        SemiAnnual: 8500,
        Annual: 17000,
    });

    const [PerMonth, setPerMonth] = useState('');

    const handleClick = (value) => {
        setSelectedValue(value);
        setPriceConfirm(prices[value]);
    };


    const newFormData = {
        firstName: Fname,
        lastName: Lname,
        email: Email,
        selectedPrice: PriceConfirm,
        permon: PerMonth
    };

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('GymMembers'));
        if (Array.isArray(saved)) {
            setTableData(saved);
        }
    }, []);

    const Submit = () => {
        if (Fname === '' || Lname === '' || Email === '' || selectedValue === '') {
            alert("fill data completely")
            return 0;
        }

        if (newFormData) {
            const updatedTableData = [...tableData, newFormData];
            setTableData(updatedTableData);
            localStorage.setItem('GymMembers', JSON.stringify(updatedTableData));
        }

        

        setFname('');
        setLname('');
        setEmail('');
        setSelectedValue('');
        setPerMonth('');
    };

    

    return (
        <div className={`min-h-screen font-["SF_Pro_Text"] tracking-wide bg-${props.bgCol}`}>
            <div className='flex p-3 gap-4 w-full justify-center mt-11'>
                <button
                    onClick={() => setIsTrue(!isTrue)}
                    className={`p-2  border-b-2 text-sm font-["SF_Pro_Display"] transition duration-300 border-transparent items-center text-${props.text1} hover:border-${props.text1} `}
                >
                    {isTrue? 'DASHBOARD >': '< NEW APPLICATION'}
                </button>
            </div>
            <div className='flex justify-center h-fill items-center my-10 transition duration-300'>
                {isTrue && (
                    <div className={`bg-${props.bgCol1} w-3/5 h-2/3 flex justify-center items-center p-2`}>
                        <div className='flex flex-col h-full w-1/2 mx-10'>
                            <div className='w-full gap-2 flex my-2'>
                                <input
                                    type="text"
                                    placeholder='First Name'
                                    value={Fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    className='w-full p-2 outline-none border-none'
                                />
                                <input
                                    type="text"
                                    placeholder='Last Name'
                                    value={Lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    className='w-full p-2 outline-none border-none'
                                />
                            </div>
                            <input
                                type="email"
                                placeholder='Enter Email Address'
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full p-2 outline-none border-none my-1'
                            />
                            <div className='relative'>
                                <button
                                    type="button"
                                    onClick={() => setDrop(!Drop)}
                                    className='group w-full my-2 bg-white flex items-center justify-center flex-col text-center p-2 outline-none border-none my-1'
                                >
                                    {selectedValue || 'Select Package'}
                                </button>
                                {Drop && (
                                    <ul className="dropdown-menu gap-2 bg-zinc-200 w-full flex absolute flex-col text-center">
                                        <li className='w-full p-1 hover:bg-zinc-300' onClick={() => { handleClick('Monthly'); setDrop(!Drop) }}>Monthly (1 Month)</li>
                                        <li className='w-full p-1 hover:bg-zinc-300' onClick={() => { handleClick('Quarter'); setDrop(!Drop) }}>Quarter (3 Month)</li>
                                        <li className='w-full p-1 hover:bg-zinc-300' onClick={() => { handleClick('SemiAnnual'); setDrop(!Drop) }}>Semi-Annual (6 Month)</li>
                                        <li className='w-full p-1 hover:bg-zinc-300' onClick={() => { handleClick('Annual'); setDrop(!Drop) }}>Annual (1 Year)</li>
                                    </ul>
                                )}
                            </div>
                            <div>
                                <div className="price-tabs hidden">
                                    <button
                                        className={selectedValue === 'Monthly' ? 'active' : ''}
                                        onClick={() => handleClick('Monthly')}
                                    >
                                        Monthly - {prices.Monthly}
                                    </button>
                                    <button
                                        className={selectedValue === 'Quarter' ? 'active' : ''}
                                        onClick={() => handleClick('Quarter')}
                                    >
                                        Quarter - {prices.Quarter}
                                    </button>
                                    <button
                                        className={selectedValue === 'SemiAnnual' ? 'active' : ''}
                                        onClick={() => handleClick('SemiAnnual')}
                                    >
                                        Semi-Annual - {prices.SemiAnnual}
                                    </button>
                                    <button
                                        className={selectedValue === 'Annual' ? 'active' : ''}
                                        onClick={() => handleClick('Annual')}
                                    >
                                        Annual - {prices.Annual}
                                    </button>
                                </div>
                                <p className='bg-white w-full p-2 mt-1'>Selected Package Price: {selectedValue ? prices[selectedValue] : 'No selection'}</p>
                                <input
                                    type="number"
                                    placeholder='Per-Month Amount'
                                    className='bg-white w-full p-2 my-2 outline-none border-none'
                                    value={PerMonth}
                                    onChange={(e) => setPerMonth(e.target.value)}
                                />
                            </div>
                            <button type='submit' onClick={Submit} className='bg-white w-full p-2 mt-2 hover:bg-zinc-200 transition duration-200'>Submit</button>
                        </div>
                        <div>
                            <img src={Gym} alt="" className='w-96 h-96' />
                        </div>
                    </div>
                )}
            </div>

            <div>
                {isTrue === false && (
                    <div>
                        <div className='flex justify-center'>
                            <table className='w-10/12'>
                                <thead>
                                    <tr className='bg-zinc-700 text-white'>
                                        <th className='border border-black border-2 p-2'>Sr No.</th>
                                        <th className='border border-black border-2 p-2'>Name</th>
                                        <th className='border border-black border-2 p-2'>Email</th>
                                        <th className='border border-black border-2 p-2'>Subscription</th>
                                        <th className='border border-black border-2 p-2'>Per Month Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((row, index) => (
                                        <tr key={index} >
                                            <td className='text-center border border-black border-2 p-2 bg-zinc-300'>{index + 1}</td>
                                            <td className='text-center border border-black border-2 p-2 bg-zinc-300'>{row.firstName} {row.lastName}</td>
                                            <td className='text-center border border-black border-2 p-2 bg-zinc-300'>{row.email}</td>
                                            <td className='text-center border border-black border-2 p-2 bg-zinc-300'>{row.selectedPrice}/-</td>
                                            <td className='text-center border border-black border-2 p-2 bg-zinc-300'>{row.permon ? row.permon + "/-" : 'Not applied'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Dashboard;
