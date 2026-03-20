export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section style={{textAlign:"center", padding:"100px 20px"}}>
        <h1 style={{fontSize:"40px", fontWeight:"bold"}}>
          DJLOTECH SOCIETY
        </h1>
        <p style={{color:"gray", marginTop:"10px"}}>
          Solutions digitales innovantes pour l’Afrique
        </p>
      </section>

      {/* SERVICES */}
      <section style={{display:"grid", gap:"20px", padding:"20px"}}>
        
        <div style={{background:"#111", padding:"20px", borderRadius:"10px"}}>
          <h2>Développement Web</h2>
          <p style={{color:"gray"}}>Sites rapides et modernes</p>
        </div>

        <div style={{background:"#111", padding:"20px", borderRadius:"10px"}}>
          <h2>Applications Mobile</h2>
          <p style={{color:"gray"}}>Android & iOS</p>
        </div>

        <div style={{background:"#111", padding:"20px", borderRadius:"10px"}}>
          <h2>Solutions Tech</h2>
          <p style={{color:"gray"}}>Innovation & automatisation</p>
        </div>

      </section>

      {/* CONTACT */}
      <section style={{textAlign:"center", padding:"50px"}}>
        <h2>Contact</h2>
        <p style={{color:"gray"}}>62146615</p>
        <p style={{color:"gray"}}>dalohou@wonderteck.com</p>
      </section>

    </main>
  );
}
