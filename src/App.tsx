import React, { useEffect, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const App: React.FC = () => {
  const [link, setLink] = useState<string>('');

  const generateQR = ()=>{
    if(link.length < 1)
    {
      return;
    }
    else{
        return(
          <>
            <QRCodeCanvas value={link} size={250}/>
          </>
      )
    }
  }

  return (
    <>
      <fieldset className='mt-5'>
        <div className="row">
          <div className="col-md-3 mx-auto">
            <div className="form-group">
              <label htmlFor="name" className="form-label"><strong>Insira o Link e gere o QR Code</strong></label>
              <input type="text" placeholder='Digite o Link' onKeyUp={(e)=>setLink(e.target.value)} className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mx-auto">
            {generateQR()}
          </div>
        </div>
      </fieldset>
    </>
  );
}

export default App;
