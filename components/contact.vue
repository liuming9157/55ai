<template>
    <el-affix class="float-right" position="bottom" :offset="90">
        <el-dropdown placement="top">
            <el-icon size="50" color="#00f" style="outline: none;">
                <el-icon-question-filled></el-icon-question-filled>
            </el-icon>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>
                        <div class="flex flex-col items-center">
                            <div class="font-bold">提建议、提需求</div>
                            <div>扫码联系作者</div>
                            <el-image class="w-40 h-40"
                                src="https://alioss-cdn.mzyun.tech/common/qrcode.jpg"></el-image>

                        </div>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </el-affix>
</template>