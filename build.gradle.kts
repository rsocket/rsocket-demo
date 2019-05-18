import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm") version "1.3.31"
    application
    id("com.github.ben-manes.versions") version "0.21.0"
    id("org.jetbrains.dokka") version "0.9.18"
    id("net.nemerosa.versioning") version "2.8.2"
    id("com.palantir.graal") version "0.3.0-28-g6c0e597"
    id("com.hpe.kraal") version "0.0.15"
    id("com.palantir.consistent-versions") version "1.7.1"
    id("com.diffplug.gradle.spotless") version "3.23.0"
}

repositories {
    jcenter()
    mavenCentral()
    maven(url = "https://jitpack.io")
    maven(url = "http://repo.maven.apache.org/maven2")
    maven(url = "https://dl.bintray.com/kotlin/kotlin-eap/")
    maven(url = "https://oss.jfrog.org/oss-snapshot-local")
    maven(url = "https://repo.spring.io/milestone")
//  maven(url = "https://oss.jfrog.org/libs-snapshot")
//  maven(url = "https://dl.bintray.com/reactivesocket/RSocket")
//  maven(url = "https://oss.sonatype.org/content/repositories/releases")
}

group = "com.baulsupp"
val artifactID = "rsocket-demo"
description = "RSocket Demo"
val projectVersion = versioning.info.display
// println("Version $projectVersion")
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
    implementation("javax.activation:activation")
    implementation("com.github.rvesse:airline")
    implementation("com.jakewharton.byteunits:byteunits")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-jdk8")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-reactive")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-reactor")
    implementation("org.springframework.social:spring-social-core:2.0.0.M4")
    implementation("org.springframework.social:spring-social-twitter:2.0.0.M4")
    implementation("com.google.guava:guava")
    implementation("com.fasterxml.jackson.dataformat:jackson-dataformat-cbor")
    implementation("com.fasterxml.jackson.core:jackson-databind")
    implementation("com.fasterxml.jackson.datatype:jackson-datatype-jdk8")
    implementation("com.fasterxml.jackson.datatype:jackson-datatype-jsr310")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("com.fasterxml.jackson.module:jackson-module-parameter-names")
    implementation("com.fasterxml.jackson.dataformat:jackson-dataformat-yaml")
    implementation("org.eclipse.jetty.http2:http2-http-client-transport")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("com.squareup.okio:okio")
    implementation("com.baulsupp:oksocial-output")
    implementation("io.rsocket:rsocket-core")
    implementation("io.rsocket:rsocket-transport-local")
    implementation("io.rsocket:rsocket-transport-netty")
    implementation("org.slf4j:slf4j-jdk14")

    testImplementation("org.junit.jupiter:junit-jupiter-api")
    testImplementation("org.jetbrains.kotlin:kotlin-test")
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit")

    testRuntime("org.junit.jupiter:junit-jupiter-engine:")
    testRuntime("org.slf4j:slf4j-jdk14")
}

graal {
    graalVersion("1.0.0-rc15")
    mainClass("io.rsocket.demo.App")
    outputName("rsocket-demo")
    option("--configurations-path")
    option("graal.config")
}

spotless {
    kotlinGradle {
        ktlint("0.31.0").userData(mutableMapOf("indent_size" to "2", "continuation_indent_size" to "2"))
        trimTrailingWhitespace()
        endWithNewline()
    }
}

