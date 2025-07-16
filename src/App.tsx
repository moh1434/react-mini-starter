import { useState } from 'react'
import './App.css'
import {  Route, Switch } from "wouter";
import { Home } from '@/features/home/Index';
import { Foo } from '@/features/foo/Index';

function App() {
  const [count] = useState(0)

  return (
  <>
<div>
  <p>{count}</p>

    <Switch>
      <Route path="/" component={Home} />
      <Route path="/foo" component={Foo} />

      {/* Default route in a switch */}
      <Route>404: No such page!</Route>
    </Switch>
    </div>
  </>
);
}

export default App
