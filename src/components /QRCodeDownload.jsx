import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './QRCodeDownload.css';

function QRCodeDownload() {
  const fileUrl = "https://street-sneaks.vercel.app"; // replace with your actual file URL

  return (
    <div className="qr-code-section">
      <h2>QR Code for File</h2>
      <QRCodeCanvas value={fileUrl} size={150} />
      <p>Scan to download</p>
    </div>
  );
}

export default QRCodeDownload;
