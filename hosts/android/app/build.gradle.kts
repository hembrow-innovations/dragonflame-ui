plugins {
    id("com.android.application")
}

android {
    namespace = "ui.dragonflame.host"
    compileSdk = 35
    defaultConfig {
        applicationId = "ui.dragonflame.host"
        minSdk = 24
        targetSdk = 35
        ndk {
            abiFilters += listOf("arm64-v8a", "x86_64")
        }
    }
    sourceSets.getByName("main") {
        jniLibs.srcDir("src/main/jniLibs")
    }
}

tasks.register<Exec>("buildEmbedder") {
    workingDir = rootDir
    commandLine("node", "scripts/build-embedder.mjs")
}

tasks.matching { it.name == "preBuild" }.configureEach {
    dependsOn("buildEmbedder")
}
