import "./App.css";

function App() {
  return (
    <>
      <div className="users">
        <h1 className="text-center">Users</h1>
      </div>
      <form>
        <div className="w-25 mx-auto mt-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter name..."
          />
        </div>
        <div class="mb-3 mt-3 w-25 mx-auto" >
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="w-25 mx-auto mt-3">
          <label for="exampleFormControlInput1" class="form-label">
            Age
          </label>
          <input
            type="number"
            class="form-control"
            id="age"
            placeholder="Enter age..."
          />
        </div>
      </form>
    </>
  );
}

export default App;
