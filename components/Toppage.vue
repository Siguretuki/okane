<template>
    <div>
        <div class="row">
            <div class="col-3 border">
                <h1 class="text-center p-4">各種入力</h1>
                <div class="pt-4">
                    <ul class="list-unstyled small my-3">
                        <li class="my-3" v-for="item in data.input">
                            <button type="button" class="btn btn-outline-primary w-100">{{ item.text }}</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-9 border">
                <h1 class="text-center p-4">各種出力</h1>
                <div class="row">
                    <div class="col-4 pt-4">
                        <ul class="list-unstyled small my-3">
                            <li class="my-3" v-for="item in data.output1">
                                <button type="button" class="btn btn-outline-primary w-100">{{item.text}}</button>
                            </li>
                        </ul>
                    </div>
                    <div class="col-4 pt-4">
                        <ul class="list-unstyled small my-3">
                            <li class="my-3" v-for="item in data.output2">
                                <button type="button" class="btn btn-outline-primary w-100">{{item.text}}</button>
                            </li>
                        </ul>
                    </div>
                    <div class="col-4 pt-4">
                        <ul class="list-unstyled small my-3">
                            <li class="my-3" v-for="item in data.output3">
                                <button type="button" class="btn btn-outline-primary w-100">{{item.text}}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const data = nameList()
</script>