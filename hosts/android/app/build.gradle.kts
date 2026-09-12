plugins {
    id("com.android.application")
}

layout.buildDirectory.set(file("${rootDir}/../../target/android-gradle/app"))

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
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    sourceSets.getByName("main") {
        jniLibs.srcDir(file("${rootDir}/../../target/android-jniLibs"))
    }
}

val androidAbi = providers.gradleProperty("androidAbi").orElse("x86_64")

tasks.register<Exec>("buildEmbedder") {
    workingDir = rootDir
    System.getenv().forEach { (key, value) -> environment(key, value) }
    environment("ANDROID_ABI", androidAbi.get())
    commandLine("node", "scripts/build-embedder.mjs")
}

tasks.matching { it.name == "preBuild" }.configureEach {
    dependsOn("buildEmbedder")
}
