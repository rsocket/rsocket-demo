import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.3.1.RELEASE"
	id("io.spring.dependency-management") version "1.0.9.RELEASE"
	kotlin("jvm") version "1.3.72"
	kotlin("plugin.spring") version "1.3.72"
}

group = "io.rsocket"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_11

repositories {
	mavenCentral()
	maven(url = "https://jitpack.io")
}

dependencies {
	implementation(platform("com.squareup.okhttp3:okhttp-bom:4.7.2"))
	implementation("com.squareup.okhttp3:okhttp:4.7.2")
	implementation("com.squareup.okhttp3:logging-interceptor:4.7.2")
	implementation("com.squareup.okhttp3:okhttp-tls:4.7.2")
	implementation("com.squareup.okhttp3:okhttp-dnsoverhttps:4.7.2")
	implementation("com.squareup.okhttp3:okhttp-sse:4.7.2")
	implementation("com.squareup.moshi:moshi:1.8.0")
	implementation("com.squareup.moshi:moshi-adapters:1.8.0")
	implementation("com.squareup.moshi:moshi-kotlin:1.8.0")
	implementation("org.springframework.boot:spring-boot-starter-rsocket")
	implementation("org.springframework.boot:spring-boot-starter-webflux")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("io.projectreactor.kotlin:reactor-kotlin-extensions")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	implementation("org.jetbrains.kotlinx:kotlinx-coroutines-reactor")
	implementation("com.github.yschimke:okurl:2.6") {
		exclude(group = "com.babylon.certificatetransparency", module = "certificatetransparency")
		exclude(group = "org.slf4j", module = "slf4j-jdk14")
	}
	implementation("com.github.yschimke:oksocial-output:5.1")
	testImplementation("org.springframework.boot:spring-boot-starter-test") {
		exclude(group = "org.junit.vintage", module = "junit-vintage-engine")
	}
	testImplementation("io.projectreactor:reactor-test")
}

tasks.withType<Test> {
	useJUnitPlatform()
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "11"
	}
}
