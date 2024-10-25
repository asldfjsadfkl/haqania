import React, { useEffect, useState } from 'react';
import './updatestudent.css';
import server from '../../../server';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const UpdateS = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    var [val, setVal] = useState({
        admissionNumber: "",
        cnicNumber: "",
        gCnic: "",
        guiderName: "",
        name: "",
        newClass: "",
        phone: "",
        previosClass: "",
        situation: ""
    });

    useEffect(() => {
        async function got() {
            const { data } = await axios.get(`${server}/student/${id}`);
            // console.log(data.student);
            setVal(data?.student);
        }
        got();
    }, [id]);
    //////////////////
    ////////////////
    var handleChange = (e) => {
        setVal({ ...val, [e.target.name]: e.target.value });
    }
    ///////////// update secion api

    const submitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        await axios.patch(`${server}/student/${id}`, data);
        navigate('/student')
    }



    return (
        <div className='mainofupdatecss'>
            <section className="sectionOfupdatestudnet">کوائف کی تجدید</section>
            <form className='updateS' action="PATCH" onSubmit={submitForm}>
                <input
                    required
                    maxLength="15"
                    className="inputofupdatestudents"
                    name="admissionNumber"
                    type="number"
                    placeholder="داخلہ نمبر"
                    value={val?.admissionNumber}
                    onChange={handleChange}
                    max={1000}
                />

                <input
                    required
                    className="inputofupdatestudents"
                    type="text"
                    name="name"
                    placeholder=" نام طالبعلم بمع ولدیت"
                    value={val?.name}
                    onChange={handleChange}
                    max={30}
                />
                <input
                    required
                    className="inputofupdatestudents"
                    type="number"
                    name="cnicNumber"
                    placeholder="شناختی کارڈ نمبر"
                    value={val?.cnicNumber}
                    onChange={handleChange}
                    max={999999999999}

                />
                <input
                    required
                    className="inputofupdatestudents"
                    type="text"
                    name="guiderName"
                    placeholder="سرپرست کا نام بمع ولدیت"
                    value={val?.guiderName}
                    onChange={handleChange}
                    maxLength={30}
                />
                <input
                    required
                    className="inputofupdatestudents"
                    type="number"
                    name="gCnic"
                    placeholder="شناختی کارڈ نمبر"
                    value={val?.gCnic}
                    onChange={handleChange}
                    max={999999999999}

                />
                <input
                    required
                    className="inputofupdatestudents"
                    type="text"
                    name="previosClass"
                    placeholder="سابقہ درجہ"
                    value={val?.previosClass}
                    onChange={handleChange}
                    maxLength={20}
                />
                <input
                    required
                    className="inputofupdatestudents"
                    type="text"
                    name="newClass"
                    placeholder="مطلوبہ درجہ"
                    value={val?.newClass}
                    onChange={handleChange}
                    maxLength={20}
                />

                <input
                    required
                    className="inputofupdatestudents"
                    type="number"
                    name="phone"
                    placeholder="موبائل نمبر"
                    value={val?.phone}
                    onChange={handleChange}
                    max={9999999999999}
                />
                <input
                    required
                    className="inputofupdatestudents"
                    type="text"
                    name="situation"
                    placeholder="کیفیت"
                    value={val?.situation}
                    onChange={handleChange}

                    maxLength={20}
                />
                <button type="submit" className='submitOfupdateS'>محفوظ کریں</button>
            </form></div>


    )
}

export default UpdateS;