import React from "react";

const makanans = [
  {
    nama: "Soto",
    harga: 12000,
  },
  {
    nama: "Bakso",
    harga: 11000,
  },
  {
    nama: "Mie Ayam",
    harga: 7000,
  },
  {
    nama: "Nasi Goreng",
    harga: 15000,
  },
];

// reduce = total bayar

const total_bayar = makanans.reduce((total_harga, makanan) => {
  return total_harga + makanan.harga;
}, 0);

const Map = () => {
  return (
    <div>
      <h2>Map Sederhana</h2>
      <ul>
        {makanans.map((makanan, index) => (
          <li>
            {index + 1} {makanan.nama} - {makanan.harga}
          </li>
        ))}
      </ul>
      <h2>Map Filter harga lebih dari sama dengan 11rb </h2>
      <ul>
        {makanans
          .filter((makanan) => makanan.harga > 11000)
          .map((makanan, index) => (
            <li>
              {index + 1} {makanan.nama} - {makanan.harga}
            </li>
          ))}
      </ul>

      <h3> Total Harga : {total_bayar}</h3>
    </div>
  );
};

export default Map;
