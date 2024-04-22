
export function Stepper2() {
    return (
        <div classname="steppertwo" style={{
            width: "1265.59px",
            height: "438.95px",
            transform: "translateX(-130px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div classname="container" style={{ width: "1012.47px", height: "438.95px", alignItems: "center", display: "flex", flexDirection: "column" }}>
                <div className="toggle" style={{
                    width: "319.84px", height: "52px", display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    
                }}>
                    <button style={{
                        fontFamily: "NunitoSan",
                        border: "none", borderRadius: "22px", fontSize: "16px", fontWeight: "800", lineHeight: "22px", width: "141.89px", height: "52px", display: "flex", justifyContent: "center", alignItems: "center", color: "white", background: "#2A9AFF"
                    }}>
                        TAMAMLAYICI
                    </button>
                </div>
               
                    <p style={{
                        width: "374.39px", height: "21px",
                        justifyContent: "center",
                        alignItems: "center",
                        transform: "translateX(10px)",
                        fontSize:"15px"
                    }}>
                        Tamamlayıcı kapsamındaki hastaneleri inceleyebilirsiniz.
                        </p>
                
                <div className="filters" style={{ width: "809.97px", height: "41.59px" }}>
                    {/* continer grid yapısı kullanılsın */}
                    <div className="dropdownsInput">
                    <div className="drowdownCity"></div>
                    <div className="dropdownDistrict"></div>
                    </div>
                    <div className="filterInput"></div>
                </div>
                <div className="filterList" style={{ width: "809.97px", height: "204px" }}>
                    {/* hastaneler listelensin */}

                </div>
            </div>

        </div>
    );
}
export default Stepper2;