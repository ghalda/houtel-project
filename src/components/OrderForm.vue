<template>
    <div id="order-details">
        <div class="container">
            <div class="row my-5">
                <div class="col-lg-7">
                    <h1 class="fw-bold">Masukkan Rincian Pesanan</h1>
                </div>
                <form action="">
                    <fieldset>
                        <div class="col-lg-7 my-3">
                    <div class="mb-3">
                        <label for="Name" class="form-label fw-bold">Nama</label>
                        <input type="text" class="form-control" id="Name">
                    </div>
                </div>
                <div class="col-lg-7 my-3">
                    <div class="mb-3">
                        <label for="Email" class="form-label fw-bold">Email</label>
                        <input type="email" class="form-control" id="Email">
                    </div>
                </div>
                <div class="col-lg-7 my-3">
                    <div class="mb-3">
                        <label for="Phone" class="form-label fw-bold">Telepon</label>
                        <input type="tel" class="form-control" id="Phone">
                    </div>
                </div>
                    </fieldset>
                </form>
            </div>
            <div class="row my-5 flex-column">
                <div class="col-lg-7">
                    <h1 class="fw-bold">Pilih Metode Pembayaran</h1>
                </div>
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
                <div class="col-lg-3">
                    <router-link to="/ConfirmationPage" class="btn btn-primary">Proses Pembayaran</router-link>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'OrderForm'
}
</script>

<style>
@media only screen and (max-width: 992px) {
    #order-details h1{
        text-align: center;
    }
    #order-details .payment{
        flex-direction: column;
    }
}
</style>