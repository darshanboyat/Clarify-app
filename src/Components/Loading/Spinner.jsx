// import Load from './Load'
import { Puff } from "react-loader-spinner";
function App() {
  return (
    <div>
      <Puff
  height="80"
  width="80"
  radisu={1}
  color="blue"
  ariaLabel="puff-loading"
  wrapperStyle={{display: 'flex', justifyContent: 'center', paddingTop: '20%'}}
  wrapperClass=""
  visible={true}
/>
    </div>
  );
}

export default App;
