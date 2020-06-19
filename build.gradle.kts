import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm") version "1.3.72"
    application
    id("com.github.ben-manes.versions") version "0.21.0"
    id("net.nemerosa.versioning") version "2.8.2"
    id("com.diffplug.gradle.spotless") version "3.23.0"
}

repositories {
    jcenter()
    mavenCentral()
    maven(url = "http://repo.maven.apache.org/maven2")
}

group = "com.baulsupp"
val artifactID = "rsocket-demo"
description = "RSocket Demo"
val projectVersion = versioning.info.display
version = projectVersion

base {
    archivesBaseName = "rsocket-demo"
}

application {
    mainClassName = "io.rsocket.demo.App"
}

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility = JavaVersion.VERSION_1_8
}

tasks {
    withType(KotlinCompile::class) {
        kotlinOptions.jvmTarget = "1.8"
        kotlinOptions.apiVersion = "1.3"
        kotlinOptions.languageVersion = "1.3"
        kotlinOptions.allWarningsAsErrors = false
        kotlinOptions.freeCompilerArgs = listOf("-Xjsr305=strict", "-Xjvm-default=enable")
    }
}

tasks {
    withType(Tar::class) {
        compression = Compression.GZIP
    }
}

dependencies {
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("io.rsocket:rsocket-core:1.0.1")
    implementation("io.rsocket:rsocket-transport-local:1.0.1")
    implementation("io.rsocket:rsocket-transport-netty:1.0.1")

    testImplementation("org.jetbrains.kotlin:kotlin-test")
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit")

    testRuntimeOnly("org.slf4j:slf4j-jdk14")
}

spotless {
    kotlinGradle {
        ktlint("0.31.0").userData(mutableMapOf("indent_size" to "2", "continuation_indent_size" to "2"))
        trimTrailingWhitespace()
        endWithNewline()
    }
}

