const barangList = [
    { kode: '001', nama: 'Barang A', harga: 10000 },
    { kode: '002', nama: 'Barang B', harga: 20000 },
    { kode: '003', nama: 'Barang C', harga: 30000 },
  ];

  function tampilkanDaftarBarang() {
    const tabel = document.querySelector('table tbody');
    barangList.forEach(barang => {
      const row = `<tr>
        <td>${barang.kode}</td>
        <td>${barang.nama}</td>
        <td>${barang.harga}</td>
      </tr>`;
      tabel.innerHTML += row;
    });
  }
  

  function transaksi() {
    const kodeBarangInput = document.getElementById('kodeBarang').value;
    const jumlahBarangInput = parseInt(document.getElementById('jumlahBarang').value);
  
  
    alert(`Total pembayaran adalah: ${totalHarga}`);
  

    const uangDibayar = parseFloat(prompt('Masukkan jumlah uang:'));
  
    if (uangDibayar >= totalHarga) {
      const kembalian = uangDibayar - totalHarga;
      alert(`Total kembalian anda adalah: ${kembalian}`);
    } else {
      const kekurangan = totalHarga - uangDibayar;
      alert(`Uang anda kurang ${kekurangan}.`);
    }
  }

  tampilkanDaftarBarang();
  