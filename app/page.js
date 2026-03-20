export default function Home() {
  return (
    <main style={{fontFamily:"Arial, sans-serif"}}>

      {/* HEADER */}
      <header style={{
        display:"flex",
        justifyContent:"space-between",
        padding:"20px 40px",
        background:"#0a0a0a",
        color:"white",
        position:"sticky",
        top:0
      }}>
        <h2>DJLOTECH</h2>
        <nav style={{display:"flex", gap:"20px"}}>
          <a href="#" style={{color:"white"}}>Accueil</a>
          <a href="#" style={{color:"white"}}>Services</a>
          <a href="#" style={{color:"white"}}>Projets</a>
          <a href="#" style={{color:"white"}}>Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{
        textAlign:"center",
        padding:"120px 20px",
        background:"linear-gradient(135deg,#0f172a,#1e293b)"
      }}>
        <h1 style={{fontSize:"50px", color:"white"}}>
          Construisons le futur digital
        </h1>
        <p style={{color:"#94a3b8", marginTop:"15px"}}>
          Développement web, mobile et solutions technologiques innovantes
        </p>

        <button style={{
          marginTop:"30px",
          padding:"15px 30px",
          background:"#3b82f6",
          border:"none",
          color:"white",
          borderRadius:"8px",
          cursor:"pointer"
        }}>
          Démarrer un projet
        </button>
      </section>

      {/* SERVICES */}
      <section style={{padding:"60px 40px", background:"#020617", color:"white"}}>
        <h2 style={{textAlign:"center", marginBottom:"40px"}}>
          Nos Services
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px"
        }}>

          <div style={card}>
            <h3>Développement Web</h3>
            <p>Sites rapides, modernes et optimisés SEO</p>
          </div>

          <div style={card}>
            <h3>Applications Mobile</h3>
            <p>Android & iOS performants</p>
          </div>

          <div style={card}>
            <h3>Solutions Tech</h3>
            <p>Automatisation, IA et innovation</p>
          </div>

        </div>
      </section>

      {/* PROJETS */}
      <section style={{padding:"60px 40px", background:"#020617", color:"white"}}>
        <h2 style={{textAlign:"center", marginBottom:"40px"}}>
          Nos Projets
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px"
        }}>

          <div style={card}>
            <h3>FuelX</h3>
            <p>Gestion intelligente des stations-service</p>
          </div>

          <div style={card}>
            <h3>Imoloc</h3>
            <p>Gestion immobilière digitale</p>
          </div>

          <div style={card}>
            <h3>SyGeQ</h3>
            <p>Système de gestion avancé</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section style={{
        textAlign:"center",
        padding:"80px 20px",
        background:"#0f172a",
        color:"white"
      }}>
        <h2>Contactez-nous</h2>
        <p style={{marginTop:"10px", color:"#94a3b8"}}>
          62146615 | dalohou@wonderteck.com
        </p>

        <button style={{
          marginTop:"20px",
          padding:"12px 25px",
          background:"#22c55e",
          border:"none",
          borderRadius:"8px",
          color:"white"
        }}>
          WhatsApp
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign:"center",
        padding:"20px",
        background:"#020617",
        color:"#94a3b8"
      }}>
        © 2026 DJLOTECH SOCIETY
      </footer>

    </main>
  );
}

const card = {
  background:"#0f172a",
  padding:"20px",
  borderRadius:"10px",
  border:"1px solid #1e293b"
};
