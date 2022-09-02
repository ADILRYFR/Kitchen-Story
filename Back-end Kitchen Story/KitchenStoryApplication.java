package Kitchen.Story.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.controller.admincontroller;

@SpringBootApplication
@EnableJpaRepositories(basePackages="com.repository")
@EntityScan(basePackages="com.bean")
@ComponentScan(basePackages="com")
public class KitchenStoryApplication {

	public static void main(String[] args) {
		SpringApplication.run(KitchenStoryApplication.class, args);
		System.out.println("It's running....");
	}

}
