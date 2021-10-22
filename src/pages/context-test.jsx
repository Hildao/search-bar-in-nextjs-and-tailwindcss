import { useContext, createContext } from 'react';
const UserContext = createContext(undefined);

export default function ContextTestPage() {
  return <Grandparent />;
}

function Grandparent({}) {
  return (
    <div>
      <Parent />
    </div>
  );
}

function Parent({}) {
  return (
    <div>
      <Child />
    </div>
  );
}

function Child({}) {
  const ctx = useContext(FamilyContext);
  return <div>{ctx.familyName}</div>;
}
