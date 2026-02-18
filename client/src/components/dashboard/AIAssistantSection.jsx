import { useState } from "react";
import SvgIcon from "./SvgIcon";
import sendIcon from "../../assets/IA Button.png";
import { sc } from "./styles";

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    { from:"bot", text:"¡Hola! Soy el asistente de MediTrack. Estaré disponible una vez conectado al backend con la API de IA." }
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev,
      { from:"user", text:input },
      { from:"bot",  text:"Función disponible al conectar la API de IA." }
    ]);
    setInput("");
  };

  return (
    <div>
      <h2 style={sc.sectionTitle}>Asistente IA · MediTrack</h2>
      <p style={sc.sectionSub}>Soporte inteligente para el personal clínico</p>
      <div style={sc.chatContainer}>
        <div style={sc.chatMessages}>
          {messages.map((m, i) => (
            <div key={i} style={{ display:"flex", justifyContent: m.from==="user"?"flex-end":"flex-start", marginBottom:12 }}>
              {m.from==="bot" && (
                <div style={{ width:30, height:30, borderRadius:"50%", background:"rgba(37,99,235,0.12)", display:"flex", alignItems:"center", justifyContent:"center", marginRight:8, flexShrink:0, alignSelf:"flex-end" }}>
                  <SvgIcon name="bot" size={14} color="#2563EB" />
                </div>
              )}
              <div style={{ maxWidth:"70%", padding:"11px 15px", fontSize:13, lineHeight:1.55, borderRadius: m.from==="user"?"16px 16px 4px 16px":"16px 16px 16px 4px", background: m.from==="user"?"linear-gradient(135deg,#1E3A8A,#2563EB)":"rgba(255,255,255,0.85)", color: m.from==="user"?"#fff":"#1e3a8a", boxShadow:"0 2px 8px rgba(0,0,0,0.07)" }}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display:"flex", gap:10, padding:"14px 16px", borderTop:"1px solid rgba(30,58,138,0.1)", background:"rgba(255,255,255,0.5)" }}>
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Escribe tu consulta..." style={sc.chatInputField} />
          <button onClick={send} style={sc.chatSendBtn}>
            <img src={sendIcon} width={18} height={18} alt="enviar" style={{ objectFit:"contain" }} />
          </button>
        </div>
      </div>
    </div>
  );
}