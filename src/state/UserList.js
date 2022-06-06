import { useState } from "react";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  const onAddUser = () => setUserList(userList.concat({ name: "", age: 0 }));

  const onCheckUserListData = () =>
    console.log(JSON.stringify(userList, null, 2));

  const onChangeUserListData = index => e => {
    const { name, value } = e.target;

    const targetBefore = userList.slice(0, index);
    const targetAfter = userList.slice(index + 1);
    const target = { ...userList[index] };

    target[name] = name === "age" ? Number(value) : value;

    const newUserList = [...targetBefore, target, ...targetAfter];

    setUserList(newUserList);
  };

  const onRemove1 = index => () => {
    const targetBefore = userList.slice(0, index);
    const targetAfter = userList.slice(index + 1);
    const newUserList = [...targetBefore, ...targetAfter];
    setUserList(newUserList);
  };

  const onRemove2 = index => () => {
    const newUserList = userList.filter((_, idx) => idx !== index);
    setUserList(newUserList);
  };

  return (
    <div>
      <button onClick={onAddUser}>추가</button>
      <button onClick={onCheckUserListData}>데이터 확인</button>
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
                    onChange={onChangeUserListData(index)}
                  />
                </td>
                <td>
                  <input
                    name="age"
                    value={age}
                    onChange={onChangeUserListData(index)}
                  />
                </td>
                <td>
                  <button onClick={onRemove1(index)}>삭제 방법 1</button>
                </td>
                <td>
                  <button onClick={onRemove2(index)}>삭제 방법 2</button>
                  <button
                    onClick={() => {
                      const targetBefore = userList.slice(0, index);
                      const targetAfter = userList.slice(index + 1);
                      const newUserList = [...targetBefore, ...targetAfter];
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
