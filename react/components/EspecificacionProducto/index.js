import React, { useEffect, useState } from "react";
import { useProduct } from "vtex.product-context";
import Descripcion from "./Descripcion";

function App({ type }) {
  const [info, setInfo] = useState(null);
  const productContext = useProduct();
  console.log({ productContext })

  useEffect(() => {
    if (type === 'description') {
      setInfo(productContext?.product?.description);
    } else if (type === 'soluciones') {
      console.log('es soluciones', productContext?.selectedItem?.complementName)
      setInfo(productContext?.selectedItem?.complementName);
    } else {
      setInfo(null);
    }
  }, [type, productContext.product]);

  return (
    <div>
      {info && <Descripcion descripcion={info} />}
    </div>
  );
}

export default App;
