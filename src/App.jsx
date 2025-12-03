function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">FORM DI REGISTRAZIONE</h1>
          <form action="">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Nome Completo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome Cognome"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Janjis1994"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Pass1234#"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">Specializzazione</label>
                <select class="form-select" aria-label="Default select example">
                  <option value=""></option>
                  <option value="1">Full Stack</option>
                  <option value="2">Frontend</option>
                  <option value="3">Backend</option>
                </select>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Anni di Esperienza</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="5"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label className="form-label">Descrizione Personale</label>
                  <input
                    type="textarea"
                    className="form-control"
                    placeholder="descriviti in poche parole"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <div className="mb-3">
                <button type="submit" className="btn btn-primary mb-3">
                  Invia
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
