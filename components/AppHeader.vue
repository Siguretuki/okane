<template>
        <nav class="navbar navbar-expand navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="~/assets/img/okane.png" alt=""  height="80">
                </a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2">
                    <li class="nav-item">
                    <a class="nav-link" href="/homepage">会社ページ</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="nav-in" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        各種入力
                        </a>
                        <ul class="dropdown-menu" aria-labelleadby="nav-in">
                            <li><a class="dropdown-item" href="#">複合仕訳入力</a></li>
                            <li><a class="dropdown-item" href="#">元帳入力</a></li>
                            <li><a class="dropdown-item" href="#">通帳入力</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="nav-out" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        各種出力
                        </a>
                        <ul class="dropdown-menu" aria-labelleadby="nav-out">
                            <li><a class="dropdown-item" href="#">仕訳帳</a></li>
                            <li><a class="dropdown-item" href="#">合計残高試算表</a></li>
                            <li><a class="dropdown-item" href="#">総勘定元帳</a></li>
                            <li><a class="dropdown-item" href="#">個人出納帳</a></li>
                            <li><a class="dropdown-item" href="#">出納帳</a></li>
                            <li><a class="dropdown-item" href="#">補助科目合計残高表</a></li>
                            <li><a class="dropdown-item" href="#">補助元帳</a></li>
                            <li><a class="dropdown-item" href="#">経費精算申請</a></li>
                            <li><a class="dropdown-item" href="#">仕訳検索</a></li>
                            <li><a class="dropdown-item" href="#">消費税課税区分別集計表</a></li>
                            <li><a class="dropdown-item" href="#">月次比較財務諸表</a></li>
                            <li><a class="dropdown-item" href="#">経費精算承認</a></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
</template>