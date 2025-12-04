import { useState, useRef, useEffect, useMemo } from "react";

function App() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

  // const [name, setName] = useState("Marco Bacci");
  // const [specialization, setSpecialization] = useState("");
  // const [years, setYears] = useState("1");
  console.log("render");

  const refName = useRef();
  const refYears = useRef();
  const refSpecialization = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");

  // --------------------validazione con state e effect--------------------------------

  const [isUserValid, setIsUserVsalid] = useState(false);

  useEffect(() => {
    const charsValid = username.split("").every((char) => {
      return letters.includes(char.toLowerCase()) || numbers.includes(char);
    });
    const isValid = charsValid && username.trim("").length >= 6;
    setIsUserVsalid(isValid);
  }, [username]);

  // -------------------------VALIDAZIONI--------------------------------
  // ----------------------username-----------------------------
  const isUserNameValid = useMemo(() => {
    const charsValid = username.split("").every((char) => {
      return letters.includes(char.toLowerCase()) || numbers.includes(char);
    });
    return charsValid && username.trim("").length >= 6;
  }, [username]);

  // ----------------------password-----------------------------
  const isPasswordValid = useMemo(() => {
    const passValid = password.split("").some((char) => {
      return (
        symbols.includes(char) ||
        letters.includes(char.toLowerCase()) ||
        numbers.includes(char)
      );
    });
    return passValid && password.trim("").length >= 8;
  }, [password]);
  // ----------------------description-----------------------------
  const isDescriptionValid = useMemo(() => {
    const descriptionValid =
      description.trim("").length >= 100 && description.trim("").length <= 1000;
    return descriptionValid;
  }, [description]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refName.current.value;
    const specialization = refSpecialization.current.value;
    const years = refYears.current.value;
    if (
      !name.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !years.trim() ||
      years <= 0 ||
      !description.trim() ||
      !isUserValid ||
      !isPasswordValid ||
      !isDescriptionValid
    ) {
      alert("alcuni campi non sono stati compilati correttamente");
      return;
    }
    console.log(`Invio eseguito con successo:`, {
      name,
      username,
      password,
      specialization,
      years,
      description,
    });
  };

  return (
    <div className="container">
      <div className="row mt-5 solid-b">
        <div className="col-12">
          <h1 className="text-center my-5">FORM DI REGISTRAZIONE</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Nome Completo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome Cognome"
                    ref={refName}
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {username.trim() && (
                    <p style={{ color: isUserValid ? "green" : "red" }}>
                      {isUserValid ? "username valido" : "username non valido"}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Pass1234#"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {password.trim() && (
                    <p style={{ color: isPasswordValid ? "green" : "red" }}>
                      {isPasswordValid
                        ? "password valida"
                        : "password non valida"}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">Specializzazione</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  ref={refSpecialization}
                >
                  <option value="">seleziona</option>
                  <option value="full stack">Full Stack</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                </select>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Anni di Esperienza</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="5"
                    ref={refYears}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  {description.trim() && (
                    <p style={{ color: isDescriptionValid ? "green" : "red" }}>
                      {isDescriptionValid
                        ? "descrizione valida"
                        : "descrizione incompleta (minimo 100 caratteri):" +
                          " " +
                          description.trim().length +
                          " " +
                          "caratteri"}
                    </p>
                  )}
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
