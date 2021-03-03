import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.4.3"
	id("io.spring.dependency-management") version "1.0.11.RELEASE"
	id("com.google.cloud.tools.appengine") version "2.4.1"
	kotlin("jvm") version "1.4.30"
	kotlin("plugin.spring") version "1.4.30"
}

group = "io.rsocket.demo"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_1_8

repositories {
	mavenCentral()
	maven(url = "https://jitpack.io") {
		group = "com.github.yschimke"
	}
}

appengine {
	deploy {
		version = "GCLOUD_CONFIG"
		projectId = "GCLOUD_CONFIG"
	}
}

extra["springCloudGcpVersion"] = "2.0.1"
extra["springCloudVersion"] = "2020.0.1"
extra["testcontainersVersion"] = "1.15.1"

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-rsocket")
	implementation("org.springframework.boot:spring-boot-starter-webflux")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.springframework.boot:spring-boot-starter-thymeleaf")
	implementation("org.springframework.boot:spring-boot-starter-actuator")
	implementation("com.google.cloud:spring-cloud-gcp-starter-secretmanager")
	implementation("com.google.cloud:spring-cloud-gcp-starter")
	implementation("io.projectreactor.kotlin:reactor-kotlin-extensions")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	implementation("org.jetbrains.kotlinx:kotlinx-coroutines-reactor")

	implementation("com.github.yschimke:okurl:2.29") {
		exclude(group = "com.squareup.okhttp3")
		exclude(group = "ch.qos.logback")
		exclude(group = "com.babylon.certificatetransparency", module = "certificatetransparency")
		exclude(group = "org.slf4j", module = "slf4j-jdk14")
	}
	implementation("com.squareup.moshi:moshi:1.11.0")
	implementation("com.squareup.moshi:moshi-adapters:1.11.0")
	implementation("com.squareup.moshi:moshi-kotlin:1.11.0")

	implementation("com.squareup.okhttp3:okhttp:5.0.0-alpha.2")
	implementation("com.squareup.okhttp3:logging-interceptor:5.0.0-alpha.2")
	implementation("com.squareup.okhttp3:okhttp-brotli:5.0.0-alpha.2")

	annotationProcessor("org.springframework.boot:spring-boot-configuration-processor")

	testImplementation("io.projectreactor:reactor-test")
	testImplementation("org.testcontainers:junit-jupiter")
	testImplementation("org.testcontainers:postgresql")
}

dependencyManagement {
	imports {
		mavenBom("com.google.cloud:spring-cloud-gcp-dependencies:${property("springCloudGcpVersion")}")
		mavenBom("org.testcontainers:testcontainers-bom:${property("testcontainersVersion")}")
		mavenBom("org.springframework.cloud:spring-cloud-dependencies:${property("springCloudVersion")}")
	}
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "1.8"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}
