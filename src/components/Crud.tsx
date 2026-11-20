import { useEffect, useState, type FormEvent } from "react";
import axios from "axios";

type User = {
  id: number | string;
  name: string;
  avatar: string;
  age: string;
  status: string;
};

export default function Crud() {
  const api = "http://localhost:3000/data";

  const [data, setData] = useState<User[]>([]);
  const [dialog, setDialog] = useState(false);
  const [status, setStatus] = useState("all");
  const [elem, setElem] = useState<User | null>(null);

  // поля формы
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [age, setAge] = useState("");
  const [active, setActive] = useState(true);

  // ---------- READ ----------
  async function getData() {
    try {
      const res = await axios.get(api);
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // ---------- DELETE ----------
  async function deleteData(id: number | string) {
    try {
      await axios.delete(`${api}/${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  // ---------- UPDATE (чекбокс на карточке) ----------
  async function toggleStatus(user: User) {
    try {
      await axios.put(`${api}/${user.id}`, {
        ...user,
        status: user.status === "active" ? "inactive" : "active",
      });
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  // ---------- открыть диалог ----------
  function openAdd() {
    setElem(null);
    setName("");
    setAvatar("");
    setAge("");
    setActive(true);
    setDialog(true);
  }

  function openEdit(user: User) {
    setElem(user);
    setName(user.name);
    setAvatar(user.avatar);
    setAge(user.age);
    setActive(user.status === "active");
    setDialog(true);
  }

  // ---------- CREATE / UPDATE (форма) ----------
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user = {
      name: name,
      avatar: avatar,
      age: age,
      status: active ? "active" : "inactive",
    };

    try {
      if (elem) {
        await axios.put(`${api}/${elem.id}`, user);
      } else {
        await axios.post(api, user);
      }
      setDialog(false);
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  const filtered = data.filter(
    (user) => status === "all" || user.status === status
  );

  return (
    <section className="crud">
      <div className="crud__head">
        <h2>Users</h2>

        <div>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <button onClick={openAdd}>Add user</button>
        </div>
      </div>

      <div className="crud__list">
        {filtered.map((user) => (
          <article key={user.id}>
            <img src={user.avatar} alt={user.name} />
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>

            <label>
              <input
                type="checkbox"
                checked={user.status === "active"}
                onChange={() => toggleStatus(user)}
              />
              {user.status}
            </label>

            <div>
              <button onClick={() => openEdit(user)}>Edit</button>
              <button onClick={() => deleteData(user.id)}>Delete</button>
            </div>
          </article>
        ))}
      </div>

      {dialog && (
        <div className="crud__overlay">
          <div className="crud__dialog">
            <header>
              <h3>{elem ? "Edit user" : "Add user"}</h3>
              <button type="button" onClick={() => setDialog(false)}>
                ✕
              </button>
            </header>

            <form onSubmit={handleSubmit}>
              <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                placeholder="Avatar url"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
              <input
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />

              <label>
                <input
                  type="checkbox"
                  checked={active}
                  onChange={(e) => setActive(e.target.checked)}
                />
                Active
              </label>

              <button type="submit">{elem ? "Save" : "Add"}</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}