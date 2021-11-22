import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { setAlert } from "./store/actions/alertActions";
import { setError } from "./store/actions/weatherActions";
import Weather from "./components/Weather";
import Search from "./components/Search";
import Alert from "./components/Alert";
import "./App.css";

const App: FC = () => {
   const dispatch = useDispatch();
   const { data, error, loading } = useSelector(
      (state: RootState) => state.weather
   );
   const alertMsg = useSelector((state: RootState) => state.alert.message);

   return (
      <div className="App">
         <Search title="Enter City Name" />
         {loading ? (
            <h2 className="is-size-3 py-2">Loading...</h2>
         ) : (
            data && <Weather data={data} />
         )}

         {alertMsg && (
            <Alert message={alertMsg} onClose={() => dispatch(setAlert(""))} />
         )}
         {error && (
            <Alert message={error} onClose={() => dispatch(setError())} />
         )}
      </div>
   );
};

export default App;
