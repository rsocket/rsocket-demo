FROM adoptopenjdk:14.0.1_7-jdk-hotspot
WORKDIR /app
#COPY . .
#RUN ./gradlew --no-daemon build
COPY build/libs/rsocket-demo-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app/app.jar"]
