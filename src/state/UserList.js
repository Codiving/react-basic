import { useState } from "react";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  return (
    <div>
      <button
        onClick={() => {
          setUserList(userList.concat({ name: "", age: 0 }));
        }}
      >
        추가
      </button>
      <button
        onClick={() => {
          console.log(JSON.stringify(userList, null, 2));
        }}
      >
        데이터 확인
      </button>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th colSpan={3}>나이</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => {
            const { name, age } = user;
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    name="name"
                    value={name}
                    onChange={e => {
                      const targetBefore = userList.slice(0, index);
                      const targetAfter = userList.slice(index + 1);
                      const target = { ...userList[index] };

                      target["name"] = e.target.value;

                      const newUserList = [
                        ...targetBefore,
                        target,
                        ...targetAfter
                      ];

                      setUserList(newUserList);
                      console.log(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    name="age"
                    value={age}
                    onChange={e => {
                      const targetBefore = userList.slice(0, index);
                      const targetAfter = userList.slice(index + 1);
                      const target = { ...userList[index] };

                      target["age"] = Number(e.target.value);

                      const newUserList = [
                        ...targetBefore,
                        target,
                        ...targetAfter
                      ];

                      setUserList(newUserList);
                      console.log(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <button
                    onClick={() => {
                      const targetBefore = userList.slice(0, index);
                      const targetAfter = userList.slice(index + 1);
                      const newUserList = [...targetBefore, ...targetAfter];
                      setUserList(newUserList);
                    }}
                  >
                    삭제 방법 1
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      const newUserList = userList.filter(
                        (_, idx) => idx !== index
                      );
                      setUserList(newUserList);
                    }}
                  >
                    삭제 방법 2
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
