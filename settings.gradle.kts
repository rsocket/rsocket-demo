rootProject.name = "rsocket-demo"

pluginManagement {
  repositories {
    gradlePluginPortal()
    mavenCentral()
    maven { url = uri("https://repo.spring.io/release") }
  }
  resolutionStrategy {
    eachPlugin {
      if (requested.id.id == "com.google.cloud.tools.appengine") {
        useModule("com.google.cloud.tools:appengine-gradle-plugin:${requested.version}")
      } else if (requested.id.id == "com.squareup.wire") {
        useModule("com.squareup.wire:wire-gradle-plugin:${requested.version}")
      }
    }
  }
}
