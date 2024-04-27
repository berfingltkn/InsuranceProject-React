import { IoInformationCircleSharp } from "react-icons/io5";
export function Stepper3() {
    return (
        <div className="anaDiv"
            style={{
                width: "1100.47px",
                height: "322.19px",
                marginInline: "auto",

                display: "flex",
                flexDirection: "column",
            }}
        >
            <div className="main"
                style={{
                    width: "950.47px",
                    // height: "174.19px",

                    backgroundColor: "rgba(248,252,254,0.9)",
                    border: "2px solid #e2edfd",
                    borderRadius: "1em",
                    margin: "0 0 1em",
                    padding: "2em",
                    display: "flex",
                    flexDirection: "column",

                }}
            >
                <div className="header"
                    style={{
                        width: "951.13px",
                        height: "43.86px",
                        display: "flex",
                        padding: "10px",
                        alignItems:"center",
                    }}
                >
                    <IoInformationCircleSharp style={{ width: "20px", height: "20px" }} />
                    <h2 style={{
                        fontSize: "1rem",
                        marginLeft: "1em",

                        fontWeight: "600",
                    }}>İşlem Kanalı Seçimi Nedir?</h2>
                </div>
                <p style={{
                    width: "951.13px",
                    height: "40.16px",
                }}>
                    İşlem kanalı seçimi, poliçenize ait işlemlerin hangi kanal tarafından takip edileceğini belirlemek için kullanılmaktadır. Tercihiniz ile, doğrudan şirket yetkilileri veya dilediğiniz bir acente üzerinden işlemlerinizi gerçekleştirebilirsiniz.
                </p>
            </div>
            <div className="chooseagent__info"
                style={{
                    width: "1012.47px",
                    height: "57.02px",
                    border: "2px solid #e2edfd",
                    borderRadius: "1em",
                    display: "flex",
                    justifyContent: "center",


                }}
            >
                <div class="form-check"
                style={{display:"flex",alignItems:"center"}}>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked="true"/>
                    <label class="form-check-label" for="flexRadioDefault1"
                    style={{
                        display:"flex",
                        alignItems:"center",
                        marginLeft:"15px",
                    }}
                    >
                        İnternet Şubesi
                    </label>
                </div>
            </div>

        </div>


    );
}
export default Stepper3;