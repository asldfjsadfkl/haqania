import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer.jsx";
import "./studdash.css";
const StudDahs = ({ student }) => {
  const [func, setFunc] = useState({
    salisa: "",
    rabia: "",
    khamis: "",
    sadis: "",
    sabih: "",
    samin: "",
    oola: "",
    sania: "",
    salaw: "",
    saldo: "",
    aedad: "",
    mutaw: "",
    hifz: "",
  });
  useEffect(() => {
    setFunc({
      // samin: student?.student?.filter((std) =>
      //   std?.newClass.includes("دورہ حدیث")
      // ).length,
      // sabih: student?.student?.filter((std) => std?.newClass.includes("سابعہ"))
      //   .length,
      // sadis: student?.student?.filter((std) => std?.newClass.includes("سادسہ"))
      //   .length,
      // khamis: student?.student?.filter((std) => std?.newClass.includes("خامسہ"))
      //   .length,
      rabia: student?.student?.filter((std) => std?.newClass.includes("رابعہ"))
        .length,
      salisa: student?.student?.filter((std) => std?.newClass.includes("ثالثہ"))
        .length,
      sania: student?.student?.filter((std) => std?.newClass.includes("ثانیہ"))
        .length,
      oola: student?.student?.filter((std) => std?.newClass.includes("اولی"))
        .length,
      mutaw: student?.student?.filter((std) => std?.newClass.includes("متوسطہ"))
        .length,
      saldo: student?.student?.filter((std) =>
        std?.newClass.includes("سال دوئم")
      ).length,
      salaw: student?.student?.filter((std) =>
        std?.newClass.includes("سال اول")
      ).length,
      aedad: student?.student?.filter((std) =>
        std?.newClass.includes("اعدادیہ")
      ).length,
      hifz: student?.student?.filter((std) => std?.newClass.includes("حفظ"))
        .length,
    });
  }, [student]);

  return (
    <>
      <main className="main_std">
        <div className="div_ofmain">
          <div className="divunder_divofmain">
            مجموعی طلبہ
            <table className="table_std">
              <tbody>
                <tr className="table_raw">
                  <td style={{ fontWeight: "bolder" }} className="table_data">
                    تعداد
                  </td>
                  <td style={{ fontWeight: "bolder" }} className="table_data">
                    درجات
                  </td>
                </tr>

                {/* <tr className="table_raw">
                <td className="table_data">{func?.samin}</td>
                <td className="table_data">عالمیہ سال دوئم</td>
              </tr>

              <tr className="table_raw">
                <td className="table_data">{func?.sabih}</td>
                <td className="table_data"> عالمیہ سال اول</td>
              </tr>

              <tr className="table_raw">
                <td className="table_data">{func?.sadis}</td>
                <td className="table_data">عالیہ سال دوئم</td>
              </tr>

              <tr className="table_raw">
                <td className="table_data">{func?.khamis}</td>
                <td className="table_data">عالیہ سال اول</td>
              </tr> */}

                <tr className="table_raw">
                  <td className="table_data">{func?.rabia}</td>
                  <td className="table_data">ثانویہ خاصہ سال دوئم</td>
                </tr>

                <tr className="table_raw">
                  <td className="table_data">{func?.salisa}</td>
                  <td className="table_data">ثانویہ خاصہ سال اول</td>
                </tr>

                <tr className="table_raw">
                  <td className="table_data">{func?.sania}</td>
                  <td className="table_data">ثانویہ عامہ سال دوئم</td>
                </tr>

                <tr className="table_raw">
                  <td className="table_data">{func?.oola}</td>
                  <td className="table_data">ثانویہ عامہ سال اول(اولی)</td>
                </tr>
                <tr className="table_raw">
                  <td className="table_data">{func?.mutaw}</td>
                  <td className="table_data">متوسطہ</td>
                </tr>
                <tr className="table_raw">
                  <td className="table_data">{func?.saldo}</td>
                  <td className="table_data">سال دوئم</td>
                </tr>
                <tr className="table_raw">
                  <td className="table_data">{func?.salaw}</td>
                  <td className="table_data">سال اول</td>
                </tr>
                <tr className="table_raw">
                  <td className="table_data">{func?.aedad}</td>
                  <td className="table_data">اعدادیہ</td>
                </tr>
                <tr className="table_raw">
                  <td className="table_data">{func?.hifz}</td>
                  <td className="table_data">شعبہ حفظ</td>
                </tr>
                <tr className="table_raw">
                  <td className="table_data">{student?.stdlength}</td>
                  <td className="table_data">کل تعداد</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StudDahs;
