import React from 'react';
import './ask.css';
import server from '../../../server';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Ask = () => {
    const navigate = useNavigate()


    const submitQuestion = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const data = Object.fromEntries(form);
        console.log(data);
        await axios.post(`${server}/questions/createquestion`, data);
        navigate('/question')
        window.alert("question sended!")
    }
    return (
        <>
            <div className="mainofask">


                <section className="hidayat">
                    <ul className="hid">
                        <h4>برائے کرم سوال بھیجتے وقت مندرجہ ذیل امور کا خیال رکھیے</h4>
                        <li className="h">فرضی اور بے مقصد سوالات سے گریز کیجیے۔</li>
                        <li className="h">سوال اردو رسم الخط میں لکھیے۔</li>
                        <li className="h">ایک مرتبہ میں ایک ہی موضوع سے متعلق سوال کیجیے، اگر مختلف موضوعات سے متعلق سوال ہوں تو ہر سوال کا الگ اندراج کیجیے۔</li>
                        <li className="h">شخصیات سے متعلق سوال کا جواب عموماً نہیں دیا جاتا۔</li>
                        <li className="h">سوال موصول ہونے پرآپ کو بذریعہ ای میل اطلاع کردی جائے گی، جواب تحقیق طلب ہونے کی صورت میں یا دیگر عوارض کی وجہ سے جواب میں تاخیر ممکن ہے، لہٰذا وہی سوال دوبارہ نہ بھیجیں، ویب سائٹ پر جواب جاری ہونے کے ساتھ ہی بذریعہ ای میل آپ کو اطلاع کردی جائے گی۔</li>
                        <li className="h">دارالافتاء صرف شرعی مسائل کی راہ نمائی کے لیے ہے، داخلے اور دیگرمعلومات کے لیے جامعہ کے دفتر سے بذریعہ فون یا ای میل  پر رابطہ کیجیے۔</li>
                        <li className="h">اگر آپ خواب کی تعبیر پوچھنا چاہتے ہیں تو یہاں پر کلک کیجیے۔</li>
                        <li className="h">جو سوال دارالافتاء میں دستی یا بذریعہ ڈاک جمع کرایا ہے وہی سوال آن لائن نہ بھیجیے۔</li>
                        <li className="h">mn45004445@gmail.comدارالافتاء کی ای میل  پر نیا سوال نہ بھیجیے۔ صرف گزشتہ سوال سے متعلق معلومات کے لیے اس ای میل پر رابطہ کیجیے۔</li>
                    </ul>
                </section>


                <div className="divforFormOfAsk">
                    <form className="formOfAsk" onSubmit={submitQuestion}>
                        <div className="container-div1-of-ask">
                            <div className="row-div2-of-ask">
                                <div className="div3-of-ask">
                                    <section className='sectionofAskheader'>سوال بھیجیں</section>
                                    <div className="formgroupsOfask">
                                        <label className='labelOfask' htmlFor="name">آپ کا نام</label>
                                        <div className="input-fieldOfask">
                                            <span className="fa-solid fa-user"></span>
                                            <input className='inputtext' name='name' type="text" required />
                                        </div>
                                    </div>
                                    <div className="formgroupsOfask"> <label className='labelOfask' htmlFor="name">ای میل ایڈریس</label>
                                        <div className="input-fieldOfask"> <span className="fa-solid fa-envelope"></span> <input className='inputtext' name='email' type="email" required /> </div>
                                    </div>
                                    <div className="formgroupsOfask"> <label className='labelOfask' htmlFor="name">فون نمبر</label>
                                        <div className="input-fieldOfask"> <span className="fa-solid fa-phone"></span> <input className='inputtext' name='phone' type="Number" required /> </div>
                                    </div>
                                    <div className="formgroupsOfask"> <label className='labelOfask' htmlFor="msg">سوال</label>
                                        <div className="input-fieldOfask bg-light">
                                            <textarea name="question" id="msg" cols="10" rows="9" className="form-control-OfAsk" placeholder="سوال۔۔۔"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row justify-content-center w-100"> <input className=' btnContact' type="submit" value="send message" /> </div>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
            <Footer />
        </>
    )
}

export default Ask