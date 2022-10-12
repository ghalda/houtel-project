<template>
    <div id="confirm-form">
        <div class="container">
            <div class="row my-5">
                <div class="col-lg-7">
                    <h1 class="fw-bold">Masukkan Rincian Pesanan</h1>
                </div>
                <form action="">
                    <fieldset disabled>
                        <div class="col-lg-7 my-3">
                    <div class="mb-3">
                        <label for="Name" class="form-label fw-bold">Nama</label>
                        <input type="text" class="form-control" id="Name" placeholder="Ghalda Putri Balqis">
                    </div>
                </div>
                <div class="col-lg-7 my-3">
                    <div class="mb-3">
                        <label for="Email" class="form-label fw-bold">Email</label>
                        <input type="email" class="form-control" id="Email" placeholder="gputribalqis@gmail.com">
                    </div>
                </div>
                <div class="col-lg-7 my-3">
                    <div class="mb-3">
                        <label for="Phone" class="form-label fw-bold">Telepon</label>
                        <input type="tel" class="form-control" id="Phone" placeholder="089653436534">
                    </div>
                </div>
                    </fieldset>
                </form>
            </div>
            <div class="row my-5 flex-column">
                <div class="col-lg-7">
                    <h1 class="fw-bold">Pilih Metode Pembayaran</h1>
                </div>
                <form action="">
                    <fieldset>
                        <div class="col-lg-3 my-3">
                    <div class="mb-3">
                        <label for="room-type" class="form-label fw-bold">Tipe Kamar</label>
                        <select id="room-type" class="form-select p-3">
                            <option>Standard Double</option>
                            <option>Standard Double</option>
                            <option>Standard Double</option>
                            <option>Standard Double</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-6 my-3">
                    <div class="mb-3">
                        <label for="room-type" class="form-label fw-bold">Metode Pembayaran</label>
                        <div class="payment d-flex align-items-start gap-5">
                            <select id="room-type" class="form-select p-3">
                                <option>Virtual Account</option>
                                <option>Transfer Manual</option>
                            </select>
                            <div class="payment-type d-flex align-items-start gap-5">
                                <img src="../assets/mandiri-logo.png">
                                <p>
                                    Mandiri Virtual Account <br>
                                    <b>90089181873817 <br>
                                    a.n Houtel Indah</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                    </fieldset>
                </form>
                <p class="mb-5" style="color:red">*pastikan data yang telah di isi benar</p>
                <div class="col-lg-12 d-flex gap-5 align-items-center confirmation-btn">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Batalkan Pesanan</button>
                    <router-link to="/ConfirmationPage" class="btn btn-primary">Konfirmasi</router-link>

                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-body text-center p-4">
                            <h5 class="modal-title" id="staticBackdropLabel">Apakah Anda Yakin Membatalkan Pesanan?</h5>
                            <p class="fw-light my-4" style="font-size: 0.8rem; color: #CDCDCD;">Kamu bisa hemat 40% dari pengeluaran kamu lho jadi pesen!</p>
                            <div class="d-flex flex-column gap-4">
                                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close">Batalkan Pesanan</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Kembali</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'ConfirmForm'
}
</script>

<style>


@media only screen and (max-width: 992px) {
    #confirm-form h1{
        text-align: center;
    }
    #confirm-form .payment{
        flex-direction: column;
    }
}
</style>